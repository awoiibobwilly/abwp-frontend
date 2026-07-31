import { useEffect, useState } from "react";

function ReadingProgress() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {

        const updateProgress = () => {

            const scrollTop = window.scrollY;

            const scrollHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            if (scrollHeight <= 0) {

                setProgress(0);

                return;

            }

            const percentage = (scrollTop / scrollHeight) * 100;

            setProgress(Math.min(100, Math.max(0, percentage)));

        };

        updateProgress();

        window.addEventListener("scroll", updateProgress, {
            passive: true,
        });

        window.addEventListener("resize", updateProgress);

        return () => {

            window.removeEventListener("scroll", updateProgress);

            window.removeEventListener("resize", updateProgress);

        };

    }, []);

    return (

        <div
            className="reading-progress"
            aria-hidden="true"
        >

            <div
                className="reading-progress-bar"
                style={{
                    width: `${progress}%`,
                }}
            />

        </div>

    );

}

export default ReadingProgress;