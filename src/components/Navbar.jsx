import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import logoImg from '../assets/img/notre-logo.png';

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input />
						<Search style={{ color: 'gray', fontSize: 14 }} />
					</SearchContainer>
				</Left>
				<Center>
					<LogoContainer>
						<Logo src={logoImg} />
					</LogoContainer>
				</Center>
				<Right>
					<MenuItem>Register</MenuItem>
					<MenuItem>Sign in</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color="primary">
							<ShoppingCartOutlined />
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 100%;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	gap: 25px;
`;

const Language = styled.div`
	font-size: 14px;
	cursor: pointer;
`;

const SearchContainer = styled.div`
	border: 0.5px solid lightgrey;
	display: flex;
	align-items: center;
	padding: 5px;
`;

const Input = styled.input`
	border: none;
`;

const Center = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	height: 100%;
`;

const LogoContainer = styled.div`
	height: 100%;
`;

const Logo = styled.img`
	height: 100%;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: end;
	gap: 25px;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
`;

export default Navbar;
