const Player = {
    _playList: document.querySelector(".playlist-body"),
    _playPauseBtn: document.querySelector("#btn-play-pause"),
    _audio: document.querySelector("#main-audio"),
    _btnNext: document.querySelector("#btn-next"),
    _btnPrev: document.querySelector("#btn-prev"),
    _progressSlider: document.querySelector("#progress-slider"),
    _btnShuffle: document.querySelector("#btn-shuffle"),
    _btnRepeat: document.querySelector("#btn-repeat"),
    _icon: document.querySelector(".play-pause-btn i"),
    _volumeSlider: document.querySelector("#volume-slider"),
    _btnVolume: document.querySelector("#btn-mute"),

    _currentIndex: Number(localStorage.getItem("currentIndex") || 0),
    _isShuffle: localStorage.getItem("isShuffle") === "true",
    _isRepeat: localStorage.getItem("isRepeat") === "true",

    _songs: [
        {
            id: 1,
            name: "Sài Gòn Ơi",
            artist: "Obito",
            path: "assets/music/Sài Gòn ơi.mp3",
            cover: "assets/images/sai-gon-oi.png",
            duration: "03:08",
        },
        {
            id: 2,
            name: "Rồi 1 Ngày",
            artist: "Dewie",
            path: "assets/music/Roi Mot Ngay.mp3",
            cover: "assets/images/roi-mot-ngay.png",
            duration: "02:54",
        },
        {
            id: 3,
            name: "Quá Sớm",
            artist: "Low G",
            path: "assets/music/Quá Sớm.mp3",
            cover: "assets/images/qua-som.png",
            duration: "04:07",
        },
        {
            id: 4,
            name: "Obito - 16",
            artist: "Obito",
            path: "assets/music/16.mp3",
            cover: "assets/images/obito-16.png",
            duration: "02:55",
        },
        {
            id: 5,
            name: "Buồn Hay Vui",
            artist: "Vsoul Feat. Rpt Mck, Obito, Ronboogz & Boyzed",
            path: "assets/music/Buồn Hay Vui (Feat. Rpt Mck, Obito, Ronboogz & Boyzed).mp3",
            cover: "assets/images/giu-lay-lam-gi.png",
            duration: "04:51",
        },
    ],

    Start() {
        this._renderPlaylist();

        this._audio.muted = localStorage.getItem("isMuted") === "true";
        const savedVolume = Number(localStorage.getItem("volume") || 100);

        this._audio.volume = savedVolume / 100;
        this._volumeSlider.value = savedVolume;

        this._btnShuffle.classList.toggle("active", this._isShuffle);
        this._btnRepeat.classList.toggle("active", this._isRepeat);
        this._btnVolume.classList.toggle("active", this._audio.muted);

        const _volumFill = document.querySelector("#volume-fill");
        if (_volumFill) {
            _volumFill.style.width = savedVolume + "%";
        }

        const _listSongChosed = document.querySelectorAll(".song-item");

        this._playPauseBtn.onclick = this._handleChangeSong.bind(this);

        _listSongChosed.forEach((song) => {
            song.onclick = () => {
                this._handleSongChosed(song);
            };
        });

        this._btnNext.onclick = this._handleForwardSong.bind(this, 1);
        this._btnPrev.onclick = () => {
            if (this._audio.currentTime > 2) {
                this._audio.currentTime = 0;
            } else {
                this._handleForwardSong(-1);
            }
        };
        this._audio.onloadedmetadata = this._timeUpDate.bind(this);
        this._audio.ontimeupdate = this._timeUpDate.bind(this);

        this._progressSlider.onmousedown = () => {
            this._audio.pause();
        };

        this._progressSlider.onmouseup = () => {
            // đổi phần trăm sang giây
            this._audio.currentTime =
                (this._progressSlider.value / 100) * this._audio.duration;

            this._audio.play();
        };

        this._btnShuffle.onclick = () => {
            this._isShuffle = !this._isShuffle;
            this._btnShuffle.classList.toggle("active", this._isShuffle);
            localStorage.setItem("isShuffle", this._isShuffle);
        };

        this._btnRepeat.onclick = () => {
            this._isRepeat = !this._isRepeat;
            this._btnRepeat.classList.toggle("active", this._isRepeat);
            localStorage.setItem("isRepeat", this._isRepeat);
        };

        this._audio.onended = () => {
            if (this._isRepeat) {
                this._handleForwardSong(0);
            } else {
                this._handleForwardSong(1);
            }
            this._audio.play();
        };

        this._volumeSlider.oninput = () => {
            const _volumFill = document.querySelector("#volume-fill");
            const value = this._volumeSlider.value;
            this._audio.volume = value / 100;
            _volumFill.style.width = value + "%";
            localStorage.setItem("volume", value);
        };

        this._btnVolume.onclick = () => {
            this._audio.muted = !this._audio.muted;
            this._btnVolume.classList.toggle("active", this._audio.muted);
            localStorage.setItem("isMuted", this._audio.muted);
        };

        this._loadCurrentSong();
    },

    _timeUpDate() {
        const processPercent =
            (this._audio.currentTime / this._audio.duration) * 100;
        const _processFill = document.querySelector("#progress-fill");
        const _currentTime = document.querySelector("#current-time");
        const _totalTime = document.querySelector("#total-time");

        _processFill.style.width = processPercent + "%";
        _currentTime.innerText = this._formatTime(this._audio.currentTime);
        _totalTime.innerText = this._formatTime(this._audio.duration);
    },

    _formatTime(time) {
        // if (isNaN(time)) return "00:00";
        const minute = Math.floor(time / 60);
        const second = Math.floor(time % 60);
        return `${minute}:${second < 10 ? "0" + second : second}`;
    },

    _handleForwardSong(step) {
        let newIndex;
        if (this._isShuffle) {
            do {
                newIndex = Math.floor(Math.random() * this._songs.length);
            } while (newIndex === this._currentIndex);
        } else {
            newIndex =
                (this._currentIndex + step + this._songs.length) %
                this._songs.length;
        }
        const newSong = document.querySelector(
            `.song-item[data-index="${newIndex}"]`,
        );
        this._handleSongChosed(newSong);
    },

    _handleSongChosed(song) {
        const songAtive = document.querySelector(".song-item.active");
        // vừa load web này đã chạy nên nó là chuỗi
        this._currentIndex = Number(song.dataset.index);
        if (songAtive) {
            songAtive.classList.remove("active");
        }
        song.classList.add("active");

        this._loadCurrentSong();
        this._audio.play();
        this._icon.classList.replace("fa-play", "fa-pause");
        localStorage.setItem("currentIndex", this._currentIndex);
    },

    _handleChangeSong() {
        if (this._audio.paused) {
            this._audio.play();
            this._icon.classList.replace("fa-play", "fa-pause");
        } else {
            this._audio.pause();
            this._icon.classList.replace("fa-pause", "fa-play");
        }
    },

    _loadCurrentSong() {
        const _img = document.querySelector("#player-cover");
        const _nameMusic = document.querySelector("#player-title");
        const _artist = document.querySelector("#player-artist");
        const currentSong = this._songs[this._currentIndex];
        this._audio.src = currentSong.path;
        _img.src = currentSong.cover;
        _nameMusic.textContent = currentSong.name;
        _artist.textContent = currentSong.artist;
    },

    _renderPlaylist() {
        const html = this._songs
            .map((song, index) => {
                const isActive = index === this._currentIndex;
                return `<tr
                                class="song-item ${isActive ? "active" : ""}"
                                data-index="${index}"
                                data-src="${song.path}"
                                data-cover="${song.cover}"
                                data-title="${song.name}"
                                data-artist="${song.artist}"
                                data-duration="${song.duration}"
                            >
                                <td class="song-num">
                                    <span class="num-text">${song.id}</span>
                                    <button class="row-play-btn">
                                        <i class="fas fa-play"></i>
                                    </button>
                                    <div class="playing-gif">
                                        <span></span><span></span><span></span>
                                    </div>
                                </td>
                                <td class="song-title-artist">
                                    <div class="song-info">
                                        <span class="song-name"
                                            >${song.name}</span
                                        >
                                        <span class="song-artist">${song.artist}</span>
                                    </div>
                                </td>
                                <td class="song-time">${song.duration}</td>
                            </tr>`;
            })
            .join("");
        this._playList.innerHTML = html;
    },
};

Player.Start();
