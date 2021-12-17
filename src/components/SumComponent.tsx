interface IProps{
    a: number,
    b: number
}
export const SumComponent = (props: IProps) => {
    const compTitle = 'Simple-Component2';
    return (
        <>
            <h4>{compTitle} - Sum of two numbers via Component:  {props.a + props.b}</h4>
        </>
    )
}