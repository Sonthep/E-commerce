
export default function Card(props) {
    const boxes = props.Products.map(
        (item) => {
            return <Box key={item.id} image={item.image} title={item.title} price={item.price} des={item.description} category={item.category} />
        }
    )
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
            {boxes}
        </div>
    )
}


const Box = (props) => {
    return (
        <div className='shadow min-h-[200px] mt-3 pb-1'>
            <img src={ props.image} alt={props.title} className='w-full' />
            <div className='flex justify-between px-2 items-center'>
                <span className='text-2xl'>{props.title}</span>
                <p className="text-xl text-yellow-500 font-bold">{props.price}</p>
            </div>
            <div>
            </div>
            
        </div>
    )
}