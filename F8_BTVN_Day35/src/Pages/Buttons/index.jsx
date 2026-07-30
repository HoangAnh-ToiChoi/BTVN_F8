import React from "react";
import Button from "../../Components/Button";
import styles from "./Buttons.module.scss";

function Buttons() {
    return (
        <div className={styles["showcase-container"]}>
            <h1 className={styles["page-title"]}>Bộ Sưu Tập Button</h1>

            <div className={styles["grid-layout"]}>
                <div className={styles["showcase-card"]}>
                    <h2 className={styles["section-title"]}>
                        Basic & Variant Buttons
                    </h2>
                    <div className={styles["button-group"]}>
                        <Button>Click me</Button>
                        <Button primary>Primary Button</Button>
                    </div>
                </div>

                <div className={styles["showcase-card"]}>
                    <h2 className={styles["section-title"]}>Button Sizes</h2>
                    <div className={styles["button-group"]}>
                        <Button size="small">Small</Button>
                        <Button size="medium">Medium</Button>
                        <Button size="large">Large</Button>
                    </div>
                </div>

                <div className={styles["showcase-card"]}>
                    <h2 className={styles["section-title"]}>
                        Shapes & Borders
                    </h2>
                    <div className={styles["button-group"]}>
                        <Button bordered>Bordered</Button>
                        <Button rounded>Rounded</Button>
                        <Button primary rounded>
                            Primary Rounded
                        </Button>
                    </div>
                </div>

                <div className={styles["showcase-card"]}>
                    <h2 className={styles["section-title"]}>
                        Navigation (Link)
                    </h2>
                    <div className={styles["button-group"]}>
                        <Button href="https://google.com" target="_blank">
                            Go to Google
                        </Button>
                    </div>
                </div>

                <div className={styles["showcase-card"]}>
                    <h2 className={styles["section-title"]}>Interactions</h2>
                    <div className={styles["button-group"]}>
                        <Button onClick={() => alert("Clicked!")}>
                            Click Alert
                        </Button>
                    </div>
                </div>

                <div className={styles["showcase-card"]}>
                    <h2 className={styles["section-title"]}>
                        Disabled & Loading States
                    </h2>
                    <div className={styles["button-group"]}>
                        <Button
                            disabled
                            onClick={() => alert("Should not show")}
                        >
                            Disabled Button
                        </Button>
                        <Button
                            loading
                            onClick={() => console.log("Should not log")}
                        >
                            Loading Button
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Buttons;
