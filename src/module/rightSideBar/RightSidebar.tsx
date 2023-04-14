import "./Style.css";
import Card from "../../shared/card/Card";
import { useEffect, useState } from "react";

export type SideBarDataProps = {
	id: number;
	name: string;
	email: string[];
	phone: string[];
};

const RightSideBarData: SideBarDataProps[] = [
	{
		id: 0,
		name: "Sales Team",
		email: ["Salesteambr@bir.in", "salesteam2@bir.in"],
		phone: ["+91 3495859694", "+01 4349585969"],
	},
	{
		id: 1,
		name: "Marketing Team",
		email: ["Salesteambr@bir.in", "salesteam2@bir.in"],
		phone: ["+91 3495859694", "+01 4349585969"],
	},
	{
		id: 2,
		name: "Marketing Team",
		email: ["Salesteambr@bir.in", "salesteam2@bir.in"],
		phone: ["+91 3495859694", "+01 4349585969"],
	},
];

export type InputData = {
	emails: string[];
	phoneNumbers: string[];
};

type Props = {
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const RightSidebar = ({ open, setOpen }: Props) => {
	const [data, setData] = useState<SideBarDataProps[]>([]);
	const [inputValues, setInputValues] = useState<InputData>({
		emails: [""],
		phoneNumbers: [""],
	});
	const [edit, setEdit] = useState({
		id: 0,
		state: false,
	});

	const handleAddEmail = () => {
		const newEmails = [...inputValues.emails, ""];
		setInputValues({ ...inputValues, emails: newEmails });
	};

	const handleAddPhoneNumber = () => {
		const newPhoneNumbers = [...inputValues.phoneNumbers, ""];
		setInputValues({ ...inputValues, phoneNumbers: newPhoneNumbers });
	};

	const handleInputChange = (index: any, field: any, value: any) => {
		const newFormData: any = { ...inputValues };
		newFormData[field][index] = value;
		setInputValues(newFormData);
	};

	useEffect(() => {
		if (
			!localStorage.getItem("myData") ||
			JSON.parse(localStorage.getItem("myData") || "[]").length === 0
		) {
			localStorage.setItem("myData", JSON.stringify(RightSideBarData));
		}

		const myData: any = JSON.parse(localStorage.getItem("myData") || "{}");

		setData(myData);
	}, [open]);

	const handleSave = (id: number) => {
		const filteredEmails = inputValues?.emails.filter((email) => email !== "");
		const filteredPhoneNumbers = inputValues?.phoneNumbers.filter(
			(phoneNumber) => phoneNumber !== ""
		);

		const updatedTeams = data.map((team) => {
			if (team.id === id) {
				return {
					...team,
					email: filteredEmails,
					phone: filteredPhoneNumbers,
				};
			}
			return team;
		});
		localStorage.setItem("myData", JSON.stringify(updatedTeams));
		setOpen(!open);
		setEdit({
			id: 0,
			state: false,
		});
		setInputValues({
			emails: [""],
			phoneNumbers: [""],
		});
	};

	const handleDelete = (idToDelete: number) => {
		const updatedItems = data.filter((item) => item.id !== idToDelete);
		localStorage.setItem("myData", JSON.stringify(updatedItems));
		setOpen(!open);
		setEdit({
			id: 0,
			state: false,
		});
	};

	return (
		<div
			className={open ? "right__sidebar__wrap active" : "right__sidebar__wrap"}>
			<div className='right__sidebar__main'>
				<div>
					<div className='mob__right__sidebar'>
						<div className='right__sidebar__header'>
							<i className='bi bi-arrow-left' />
							<p className='right__sidebar__header__title'>Contacts</p>
						</div>
						<i
							className='bi bi-x-lg right__sidebar__close'
							onClick={() => setOpen(!open)}
						/>
					</div>
					<p className='right__sidebar__header__description'>
						Please Provide the company's email & contacts
					</p>
				</div>

				<Card
					type={2}
					RightSideBarData={data.length > 0 ? data : RightSideBarData}
					inputValues={inputValues}
					handleAddEmail={handleAddEmail}
					handleAddPhoneNumber={handleAddPhoneNumber}
					handleInputChange={handleInputChange}
					handleDelete={handleDelete}
					edit={edit}
					setEdit={setEdit}
				/>

				<button
					type='submit'
					className='right__sidebar__button'
					onClick={() => handleSave(edit?.id)}>
					Save
				</button>
			</div>
		</div>
	);
};

export default RightSidebar;
