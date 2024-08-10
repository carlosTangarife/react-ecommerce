import {CalendarDaysIcon, ChevronRightIcon, ShoppingBagIcon} from "@heroicons/react/16/solid";

export const OrdersCard = (props) => {
    const {totalPrice, totalProducts} = props;

    return (
        <div className="flex justify-between items-center mb-4 border border-black p-4 w-80 rounded-lg">
            <div className="flex justify-between w-full">
                <p className="flex flex-col">
                    <span className="flex">
                        <CalendarDaysIcon className="h-6 w-6 text-black mr-2 "/>
                        <span className='font-light'>01.02.23</span>
                    </span>

                    <span className="flex">
                         <ShoppingBagIcon className="h-6 w-6 text-black mr-2"/>
                        <span className='font-light'>{totalProducts} Articles</span>
                    </span>
                </p>
                <p className="flex items-center gap-2">
                    <span className="font-medium text-2xl self-center">$ {totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black mr-2 cursor-pointer"/>
                </p>
            </div>
        </div>
    )
}
