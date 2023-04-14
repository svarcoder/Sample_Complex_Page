import "./Style.css";
import Logo from "../../assets/images/Logo.png";
import { useState } from "react";
import { Data } from "../leftSidebar/LeftSideBar";

type Props = {
	mobHam: boolean;
	setMobHam: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobSidebar = ({ mobHam, setMobHam }: Props) => {
	const [active, setActive] = useState<number>(6);

	return (
		<div
			className={mobHam ? "mob__sidebar__wrap active" : "mob__sidebar__wrap"}>
			<div className='left__sidebar__mob__main'>
				<div className='left__sidebar__main'>
					<div className='mob__sidebar__logo__wrap'>
						<div className='left__sidebar__logo'>
							<img src={Logo} alt='Logo' />
							<p className='left__sidebar__title'>A.T.Inks</p>
						</div>
						<i className='bi bi-x-lg' onClick={() => setMobHam(false)} />
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
		</div>
	);
};

export default MobSidebar;
