import { Component, For, JSX } from "solid-js";

const PercentageDisplay: Component<{ percentage: number }> = (props) => {
    return (
        <div class="loader--percentage--container">
            <div class="loader--percentage--sub--container absolute left-0 bottom-0 -translate-x-0 -translate-y-0">
                <div class="loader--percentage--number--container">
                    <div class="loader--top--shadow"></div>
                    <For each={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}>
                        {(digit) => (
                            <LoaderPercentageContainer
                                styles={{
                                    transform: `${digit === 0 ? "translate(0px, 0%)" : "translate(0px, 100%)"
                                        }`,
                                    "z-index": `${digit}`,
                                    position: "absolute",
                                }}
                                containerClass={`loader--percentage--number first--loader--percentage--number percentage--number--${digit}`}
                                childClass="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk"
                                value={digit === 10 ? digit.toString()[0] : digit}
                            />
                        )}
                    </For>
                    <div class="loader--bottom--shadow"></div>
                </div>
                <LoaderPercentageContainer
                    containerClass="loader--percentage--number--container"
                    childClass="percentage--count percentage--count--2 text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk "
                    value={
                        props.percentage < 10
                            ? props.percentage.toString().split("")[0]
                            : props.percentage.toString().split("")[1]
                    }
                />
                <div class="loader--percentage--number--container">
                    <LoaderPercentageContainer
                        styles={{
                            transform: "translate(0px, 0%)",
                            "z-index": "20",
                            position: "absolute",
                        }}
                        containerClass="loader--percentage--sign first--loader--percentage--sign"
                        childClass="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk"
                        value="%"
                    />
                    <LoaderPercentageContainer
                        styles={{
                            transform: "translate(0px, 100%)",
                            "z-index": "10",
                            position: "absolute",
                        }}
                        containerClass="loader--percentage--number third--loader--percentage--number"
                        childClass="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk"
                        value="0"
                    />
                </div>
                <div class="loader--percentage--number--container">
                    <LoaderPercentageContainer
                        styles={{
                            transform: "translate(0px, -100%) scale(0.6)",
                            "z-index": "20",
                            position: "absolute",
                        }}
                        containerClass="loader--percentage--sign second--loader--percentage--sign"
                        childClass="percentage--count text-black text-9xl lg:text-[15rem] font-medium font-cabinetgrotesk"
                        value="%"
                    />
                </div>
            </div>
        </div>
    );
};



const LoaderPercentageContainer: Component<{
    styles?: JSX.CSSProperties;
    containerClass?: string;
    childClass?: string;
    value?: string | number;
}> = (props) => {
    return (
        <div style={{ ...props?.styles }} class={` ${props?.containerClass}`}>
            <p class={`${props?.childClass}`}>{props?.value}</p>
            <div class="loader--bottom--shadow"></div>
        </div>
    );
    };

export default PercentageDisplay