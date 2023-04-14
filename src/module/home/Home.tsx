import { useState } from "react";
import "./Style.css";
import Header from "../header/Header";
import LeftSideBar from "../leftSidebar/LeftSideBar";
import Logo from "../../assets/images/Logo.png";
import Card from "../../shared/card/Card";
import RightSidebar from "../rightSideBar/RightSidebar";
import MobSidebar from "../mobSidebar/MobSidebar";

type DataProps = {
	id: number;
	name: string;
};

const Data: DataProps[] = [
	{
		id: 0,
		name: "Info",
	},
	{
		id: 1,
		name: "FAQ",
	},
	{
		id: 2,
		name: "Complaints and Feedback",
	},
	{
		id: 3,
		name: "Privacy policy",
	},
	{
		id: 4,
		name: "Terms & Conditions",
	},
];

const Home = () => {
	const [openSidebar, setOpenSidebar] = useState<boolean>(false);
	const [mobHam, setMobHam] = useState<boolean>(false);
	const [active, setActive] = useState<DataProps>({
		id: 0,
		name: "Info",
	});

	return (
		<>
			<Header setMobHam={setMobHam} />

			<div className='home__wrap'>
				<LeftSideBar />
				<div className='home__main'>
					<p className='home__title'>About Us</p>

					<div className='home__logo'>
						<div className='home__logo__wrap'>
							<img src={Logo} alt='Logo' />
							<div className='home__logo_main'>
								<p className='home__logo__title'>A.T.Inks</p>
								<p className='home__logo__description'>Digital Inks</p>
							</div>
						</div>
						<div className='home__logo__verify'>
							<i className='bi bi-patch-check-fill' />
							<a href='/' className='home__logo__verify__title'>
								Verify Company
							</a>
						</div>
					</div>

					<div className='home__description_wrap'>
						<p className='home__description'>
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta
							repellat in voluptas saepe consequatur perferendis.
						</p>
						<i className='bi bi-pencil-fill edit__description' />
					</div>

					<div className='home__tab__wrap'>
						<div className='home__tab__mob'>
							{Data.map((item, i) => (
								<div key={item.id} className='home__tab__main'>
									<p
										className={
											active?.id === i
												? "home__tab__title home__tab__active"
												: "home__tab__title"
										}>
										{item.name}
									</p>
								</div>
							))}
						</div>
					</div>

					<h1 className='active__border' />

					{active?.id === 0 ? (
						<Card
							type={1}
							openSidebar={openSidebar}
							setOpenSidebar={setOpenSidebar}
						/>
					) : (
						""
					)}
					<RightSidebar open={openSidebar} setOpen={setOpenSidebar} />
					<MobSidebar mobHam={mobHam} setMobHam={setMobHam} />
				</div>
			</div>
		</>
	);
};

export default Home;
