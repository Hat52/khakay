import { useState } from 'react';
import { MdHome, MdPerson, MdShoppingBag } from 'react-icons/md';
import { TbMessages } from 'react-icons/tb';

type INavbar = {
	title: string;
	Icon: any;
	href: string;
};

export default function Navbar() {
	return <Button />;
}

const menuItems = [
	{
		title: 'Home',
		Icon: <MdHome size="20" />,
		href: '/'
	},
	{
		title: 'About',
		Icon: <MdPerson size="20" />,
		href: '/'
	},
	{
		title: 'Articles',
		Icon: <MdShoppingBag size="20" />,
		href: '/'
	},
	{
		title: 'Contact',
		Icon: <TbMessages size="20" />,
		href: '/'
	}
];

const Button = () => {
	const [toggle, setToggle] = useState(true);

	return (
		<div className="relative z-10">
			<div
				className={`${
					toggle ? 'flex' : 'overflow-hidden scrollbar-hide'
				}  absolute left-2 md:left-9 top-4 md:top-9 rounded-[50px]  overflow-x-visible items-center transition-all flex ease-in-out duration-200 h-max flex-col`}>
				<div
					id="toggle-menu"
					onClick={() => setToggle(!toggle)}
					className={`group bg-[#3F56D1] flex gap-1 cursor-pointer justify-center items-center z-10 w-[50px] h-[50px] md:h-[60px] md:w-[60px] rounded-[50px]`}>
					<span
						className={`w-[20px] block h-[3px] transition duration-500 before:bg-white before:block before:w-[20px] before:h-[3px] before:rotate-90 rotate-90 ${
							toggle ? '-rotate-[20deg]' : ''
						}  bg-white`}></span>
				</div>
				<ul
					className={`absolute flex flex-col bg-white px-10 py-4 rounded-lg ${
						toggle ? '!left-5 visible' : 'invisible'
					} left-0 gap-2 transition-all duration-75 shadow-lg top-8 mt-10 min-w-[300px] overflow-hidden`}>
					{menuItems.map(({ title, href }: INavbar) => {
						return (
							<li key={`${href}-${title}`}>
								<a
									href={href}
									className={`list-none 
							${toggle ? 'visible' : 'invisible'}
							py-2
							before:w-0
							before:absolute
							before:left-4
							before:content-['-']
							before:text-transparent
							before:text-0
							before:py-2
							before:delay-100
							before:ease-in-out
							before:transition-[width]
							before:duration-1000
							hover:before:w-[90%]
							before:bg-[#C5C4C3]
							before:opacity-60
							translate-all duration-200 flex w-full  justify-start gap-8 font-lobster uppercase font-light cursor-pointer tracking-widest items-center cursor-pinter hover:text-cyanBlue  text-grey-500 z-5`}>
									<span className="z-10">{title}</span>
								</a>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
