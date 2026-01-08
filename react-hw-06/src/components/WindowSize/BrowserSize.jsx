import css from "./BrowserSize.module.css"
import useWindowSize from "./useWindowSize";
import DeviceIcon from "./icons/DeviceIcon";

function BrowserSize() {
    const { width, height } = useWindowSize()

    const device =
        width < 768
            ? { type: "mobile", label: "Mobile" }
            : width < 1024
                ? { type: "tablet", label: "Tablet" }
                : { type: "desktop", label: "Desktop" }


    return (
        <div className={css.container}>
            <h2 className={css.title}>Поточний розмір вікна браузера</h2>

            <div
                key={device.type}
                className={`${css.icon} ${css[device.type]}`}
            >
                <DeviceIcon type={device.type} />
            </div>

            <div className={css.device}>{device.label}</div>

            <div className={css.size}>
                {width}px * {height}px
            </div>

            <div className={css.progressBar}
                style={{ width: `${Math.min((width / 1920) * 100, 100)}%` }}></div>
        </div>
    );
}

export default BrowserSize;