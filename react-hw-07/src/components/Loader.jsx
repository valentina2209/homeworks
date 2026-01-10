import { ThreeCircles } from "react-loader-spinner"


function Loader() {
    return (
        <ThreeCircles
            visible={true}
            height="50"
            width="50"
            color="#4fa94d"
            outerCircleColor="#38bdf8"
            middleCircleColor="#a78bfa"
            innerCircleColor="#f472b6"
            ariaLabel="three-circles-loading"
            wrapperStyle={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
            wrapperClass=""
        />
    )
}

export default Loader;
