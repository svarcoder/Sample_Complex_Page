import "./Style.css";
import Input from "../input/Input";
import {
	InputData,
	SideBarDataProps,
} from "../../module/rightSideBar/RightSidebar";

interface Props {
	type: number;
	openSidebar?: boolean;
	setOpenSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
	RightSideBarData?: SideBarDataProps[];
	inputValues?: InputData;
	handleInputChange?: (index: any, field: any, value: any) => void;
	handleAddPhoneNumber?: () => void;
	handleAddEmail?: () => void;
	handleDelete?: (idToDelete: number) => void;
	edit?: any;
	setEdit?: any;
}

const Data = [
	{
		id: 0,
		title: "Contact",
		icon: <i className='bi bi-person-video2' />,
	},
	{
		id: 1,
		title: "Address",
		icon: <i className='bi bi-geo-alt' />,
	},
	{
		id: 2,
		title: "Hours of Operations",
		icon: <i className='bi bi-briefcase' />,
	},
	{
		id: 3,
		title: "Social Media & Links",
		icon: <i className='bi bi-link-45deg' />,
	},
	{
		id: 4,
		title: "Statement",
		icon: <i className='bi bi-quote' />,
	},
];

const Card = ({
	type,
	openSidebar,
	setOpenSidebar,
	RightSideBarData,
	inputValues,
	handleAddEmail,
	handleAddPhoneNumber,
	handleInputChange,
	handleDelete,
	edit,
	setEdit,
}: Props) => {
	const myData: any = JSON.parse(localStorage.getItem("myData") || "{}");

	return (
		<div className='card__wrap'>
			{type === 1 ? (
				<div className='card__contact__wrap'>
					{Data.map((item, i) => (
						<div
							className='card__info__wrap'
							key={item.id}
							onClick={() =>
								i === 0 && setOpenSidebar && setOpenSidebar(!openSidebar)
							}>
							<div className='card__info__header__wrap'>
								<div className='card__info__header__main'>
									{item.icon}
									<p className='card__info__header__title'>{item.title}</p>
								</div>
								<i className='bi bi-pencil-fill' />
							</div>

							<div className='card__info__body__wrap'>
								{i === 0 ? (
									<div className='card__info__body__contact__wrap'>
										<div className='card__info__body__contact__email'>
											<div className='card__info__body__contact__email__wrap'>
												<i className='bi bi-envelope' />
												<p className='card__info__body__contact__title'>
													Salesteambr@bir.in
												</p>
											</div>
											<div className='card__info__body__contact__more'>
												<p className='card__info__body__contact__more__title'>
													{`+${(myData && myData?.length) || 3}`}
												</p>
											</div>
										</div>
										<div className='card__info__body__contact__email__wrap'>
											<i className='bi bi-telephone' />
											<p className='card__info__body__contact__title'>
												+91 3495859694 / +01 4349585969
											</p>
										</div>
									</div>
								) : i === 1 ? (
									<div className='card__info__body__contact__wrap'>
										<p className='card__info__body__address__title'>
											C1 / 351 / 4, GIDC Makharpura,
										</p>
										<p className='card__info__body__address__title'>
											Vadodara - 390010, Gujarat, India.
										</p>
									</div>
								) : i === 2 ? (
									<div className='card__info__body__contact__wrap'>
										<p className='card__info__body__address__title'>
											Monday to Friday - 09:00 Am To 06:00 Pm
										</p>
									</div>
								) : i === 3 ? (
									<div className='card__info__body__social__wrap'>
										<div className='card__info__body__social__main'>
											<i className='bi bi-globe' />
											<p className='card__info__body__social__main__title'>
												Website
											</p>
										</div>
										<div className='card__info__body__social__main'>
											<i className='bi bi-instagram' />
											<p className='card__info__body__social__main__title'>
												Instagram
											</p>
										</div>
										<div className='card__info__body__social__main'>
											<i className='bi bi-facebook' />
											<p className='card__info__body__social__main__title'>
												Facebook
											</p>
										</div>
										<div className='card__info__body__social__main'>
											<i className='bi bi-twitter' />
											<p className='card__info__body__social__main__title'>
												Twitter
											</p>
										</div>
									</div>
								) : i === 4 ? (
									<div className='card__info__body__social__wrap'>
										<p className='card__info__body__statement__title'>
											You think it we ink it.
										</p>
										<div className='card__info__body__contact__more'>
											<p className='card__info__body__contact__more__title'>
												+1
											</p>
										</div>
									</div>
								) : (
									""
								)}
							</div>
						</div>
					))}
				</div>
			) : (
				<>
					{edit?.state ? (
						<Input
							inputValues={inputValues}
							handleAddEmail={handleAddEmail}
							handleAddPhoneNumber={handleAddPhoneNumber}
							handleInputChange={handleInputChange}
						/>
					) : (
						<>
							{RightSideBarData &&
								RightSideBarData.map((item) => (
									<div className='card__right__sidebar_wrap' key={item?.id}>
										<div className='card__right__sidebar_header__wrap'>
											<div className='card__right__sidebar_header'>
												<i className='bi bi-person-video2' />
												<p className='card__info__header__title'>
													{item?.name}
												</p>
											</div>
											<div className='card__right__sidebar_header'>
												<i
													className='bi bi-trash-fill cursor__pen'
													onClick={() => handleDelete && handleDelete(item?.id)}
												/>
												<i
													className='bi bi-pencil-fill card__right__sidebar_header__title cursor__pen'
													onClick={() =>
														setEdit && setEdit({ id: item?.id, state: true })
													}
												/>
											</div>
										</div>

										<div className='card__right__sidebar_email'>
											<i className='bi bi-envelope' />
											<div
												className={
													item?.email?.length > 2
														? "word__break2"
														: "word__break1"
												}>
												{item.email.map((value, i) => (
													<p
														className='card__info__body__statement__title'
														key={value}>
														{value}
														{item.email.length > 1 &&
															!(i + 1 === item.email.length) &&
															"/"}
													</p>
												))}
											</div>
										</div>
										<div className='card__right__sidebar_email'>
											<i className='bi bi-telephone' />
											<div
												className={
													item?.email?.length > 1
														? "word__break2"
														: "word__break1"
												}>
												{item.phone.map((value, i) => (
													<p
														className='card__info__body__statement__title'
														key={value}>
														{value}
														{item.email.length > 1 &&
															!(i + 1 === item.phone.length) &&
															"/"}
													</p>
												))}
											</div>
										</div>
									</div>
								))}
						</>
					)}
				</>
			)}
		</div>
	);
};

export default Card;
