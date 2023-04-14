import "./Style.css";
import Logo from "../../assets/images/Logo.png";
import CompanyLogo from "../../assets/images/Company.png";
import SearchBar from "../../shared/search/SearchBar";

interface Props {
	setMobHam: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ setMobHam }: Props) => {
	return (
		<div className='header__wrap'>
			<div className='header__main'>
				<div className='hamburger__wrap' onClick={() => setMobHam(true)}>
					<i className='bi bi-list' />
				</div>

				<div className='header__logo'>
					<div className='header__logo__section'>
						<img src={Logo} alt='Logo' />
						<p className='header__logo__title'>A.T.Inks</p>
					</div>
					<div className='header__powered'>
						<p className='header__powered__title'>Powered By</p>
						<img src={CompanyLogo} alt='Company Logo' />
					</div>
				</div>

				<div className='header__search'>
					<SearchBar />
				</div>

				<div className='header__end'>
					<div className='header__checkout'>
						<i className='bi bi-cart3' />
						<p className='header__checkout__title'>Checkout(200)</p>
					</div>
					<div className='header__profile'>
						<i className='bi bi-person bi-person__desktop' />
						<p className='header__profile__title'>User Admin</p>
						<i className='bi bi-chevron-down' />
					</div>
				</div>

				<div className='header__mobile__end'>
					<i className='bi bi-search' />
					<i className='bi bi-cart3' />
					<i className='bi bi-person' />
				</div>
			</div>
		</div>
	);
};

export default Header;
