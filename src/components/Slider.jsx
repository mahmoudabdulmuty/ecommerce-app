import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { sliderItems } from '../data';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
	overflow-x: hidden;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #f0d9d9;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	left: ${(props) => props.direction === 'left' && '10px'};
	right: ${(props) => props.direction === 'right' && '10px'};
	cursor: pointer;
	opacity: 0.5;
	z-index: 1;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transform: translateX(${(props) => props.sliderIndex * -100}vw);
	transition: all 1.5s ease-in-out;
`;
const Slide = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-around;
	gap: 100px;
	background-color: #${(props) => props.bg};
`;
const ImageContainer = styled.div`
	height: 100%;
	flex: 1;
	margin-left: 70px;
`;
const Image = styled.img`
	height: 80%;
`;
const InfoContainer = styled.div`
	padding: 50px;
`;
const Title = styled.h1`
	font-size: 70px;
`;
const Description = styled.p`
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 3px;
`;
const Button = styled.button`
	padding: 10px;
	font-size: 20px;
	background-color: transparent;
	cursor: pointer;
`;

const Slider = () => {
	const [index, setIndex] = useState(0);
	const handleClick = (dir) => {
		if (dir === 'left') {
			prevIndex();
		} else if (dir === 'right') {
			nextIndex();
		}
	};
	const checkNumber = (num) => {
		return num > sliderItems.length - 1
			? 0
			: num < 0
			? sliderItems.length - 1
			: num;
	};
	const prevIndex = () => {
		setIndex(checkNumber(index - 1));
	};
	const nextIndex = () => {
		setIndex(checkNumber(index + 1));
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick('left')}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper sliderIndex={index}>
				{sliderItems.map((item) => {
					return (
						<Slide key={item.id} bg={item.bg}>
							<ImageContainer>
								<Image src={item.img} />
							</ImageContainer>
							<InfoContainer>
								<Title>{item.title}</Title>
								<Description>{item.desc}</Description>
								<Button>SHOW NOW</Button>
							</InfoContainer>
						</Slide>
					);
				})}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick('right')}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};
export default Slider;
