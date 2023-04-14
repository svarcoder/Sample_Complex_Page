import "./Style.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";

type DataProps = {
	id: number;
	title: string;
	icon: any;
};

export const Data: DataProps[] = [
	{
		id: 0,
		title: "Dashboard",
		icon: <i className='bi bi-columns-gap' />,
	},
	{
		id: 1,
		title: "Orders",
		icon: <i className='bi bi-box-seam' />,
	},
	{
		id: 2,
		title: "Team Members",
		icon: <i className='bi bi-people' />,
	},
	{
		id: 3,
		title: "Partners",
		icon: <i className='bi bi-box-seam' />,
	},
	{
		id: 4,
		title: "Product Listings",
		icon: <i className='bi bi-boxes' />,
	},
	{
		id: 5,
		title: "Awards & Honours",
		icon: <i className='bi bi-trophy' />,
	},
	{
		id: 6,
		title: "About Us",
		icon: <i className='bi bi-chat-left-dots' />,
	},
	{
		id: 7,
		title: "Payment Info",
		icon: <i className='bi bi-credit-card' />,
	},
];

const LeftSideBar = () => {
	const [active, setActive] = useState<number>(6);

	return (
		<div className='left__sidebar__wrap'>
			<div className='left__sidebar__main'>
				<div className='left__sidebar__logo'>
					<img src={Logo} alt='Logo' />
					<p className='left__sidebar__title'>A.T.Inks</p>
				</div>

				<div className='left__sidebar__menu'>
					{Data.map((item, i) => (
						<div
							key={item?.id}
							className={
								active === i
									? "left__sidebar__menu__wrap active_menu"
									: "left__sidebar__menu__wrap"
							}
							onClick={() => setActive(item?.id)}>
							<div>{item.icon}</div>
							<p className='left__sidebar__menu__title'>{item.title}</p>
						</div>
					))}
				</div>

				<div className='left__sidebar__help'>
					<i className='bi bi-chat-dots' />
					<p className='left__sidebar__help__title'>Need Help?</p>
					<p className='left__sidebar__help__description'>
						Our Support Team is at your disposal.
					</p>
					<div className='left__sidebar__get__help'>
						<p className='left__sidebar__get__help__title'>Get Help</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LeftSideBar;
