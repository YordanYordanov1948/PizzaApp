import React from "react";
import styled from "styled-components";

function shoot() {
  alert("You have successfully declined your order :(");
}

const Option = (props) => {
  const handleIncrementPeperoniCount = () => {
    props.incrementPeperoni();
  };

  const handleDecrementPeperoni = () => {
    props.decrementPeperoni();
  };

  const handleOliveCount = () => {
    props.incrementOlive();
  };

  const handleOliveRemove = () => {
    props.decrementOlive();
  };

  const handleMuschroomsCount = () => {
    props.incrementMuschrooms();
  };

  const handleMuschroomsRemove = () => {
    props.decrementMushrooms();
  };

  const handleCornCount = () => {
    props.incrementCorn();
  };

  const handleCornRemove = () => {
    props.decrementCorn();
  };

  const handlePickledCount = () => {
    props.incrementPickled();
  };

  const handlePickledRemove = () => {
    props.decrementPickled();
  };

  const handleTomatoesCount = () => {
    props.incrementTomatoes();
  };

  const handleTomatoesRemove = () => {
    props.decrementTomatoes();
  };

  const handleCheeseCount = () => {
    props.incrementCheese();
  };

  const handleCheeseRemove = () => {
    props.decrementCheese();
  };

  const buttonHide = props.peperoniCount;
  const oliveButton = props.oliveCount;
  const mushroomCountButton = props.mushroomCount;
  const cornCountButton = props.cornCount;
  const pickledCountButton = props.pickledCount;
  const tomatoesCountButton = props.tomatoesCount;
  const cheeseCountButton = props.cheeseCount;

  return (
    <Container>
      {buttonHide === 5 || (
        <ButtonP onClick={handleIncrementPeperoniCount}>Add Peperoni</ButtonP>
      )}

      <ButtonD onClick={handleDecrementPeperoni}>Delete Peperoni</ButtonD>

      {oliveButton === 3 || (
        <ButtonOl onClick={handleOliveCount}>Add Olive</ButtonOl>
      )}

      <ButtonOlD onClick={handleOliveRemove}>Remove Olive</ButtonOlD>

      {mushroomCountButton === 4 || (
        <BMu onClick={handleMuschroomsCount}>Add Muschrooms</BMu>
      )}

      <BMuD onClick={handleMuschroomsRemove}>Remove Muschrooms</BMuD>

      {cornCountButton === 4 || <Corn onClick={handleCornCount}>Add Corn</Corn>}

      <CornDelete onClick={handleCornRemove}>Remove Corn</CornDelete>

      {pickledCountButton === 1 || (
        <Pickled onClick={handlePickledCount}>Add Pickled</Pickled>
      )}

      <Pickled onClick={handlePickledRemove}>Remove Pickled</Pickled>

      {tomatoesCountButton === 2 || (
        <Tomatoes onClick={handleTomatoesCount}>Add Tomatoes</Tomatoes>
      )}

      <Tomatoes onClick={handleTomatoesRemove}>Remove Tomatoes</Tomatoes>

      {cheeseCountButton === 4 || (
        <Cheese onClick={handleCheeseCount}>Add Cheese</Cheese>
      )}

      <CheeseDelete onClick={handleCheeseRemove}>Remove Cheese</CheeseDelete>

      <Cancel onClick={shoot}>Cancel an order! Click!</Cancel>
    </Container>
  );
};

export default Option;

const Container = styled.div`
  height: 440px;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(60%);
  transform: translateY(-50%);

  @media (max-width: 600px) {
    display: flex;
    width: 20%;
    flex-wrap: wrap;
    font-size: 13.5px;
    justify-content: center;
    padding-bottom: 150px;
    flex-direction: column;

    @media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {
      display: flex;
      width: 20%;
      flex-wrap: wrap;
      font-size: 12px;
      justify-content: center;
      padding-bottom: 150px;
      flex-direction: column;
    }

    @media only screen and (min-device-width: 320px) and (max-device-width: 568px) {
      display: flex;
      width: 30%;
      flex-wrap: wrap;
      font-size: 11px;
      justify-content: center;
      padding-bottom: 170px;
      flex-direction: column;
    }
  }
`;

const ButtonP = styled.div`
  color: #000;
  background-color: #f8f8ff;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const ButtonD = styled.div`
  color: #000;
  background-color: #f8f8ff;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const ButtonOl = styled.div`
  color: #000;
  background-color: #f0fff0;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
const ButtonOlD = styled.div`
  color: #000;
  background-color: #f0fff0;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
const BMu = styled.div`
  color: #fff;
  background-color: #d3d3d3;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const BMuD = styled.div`
  color: #fff;
  background-color: #d3d3d3;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Corn = styled.div`
  padding: 6px 22px;
  background-color: #ffefd5;
  cursor: pointer;
  color: #800000;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const CornDelete = styled.div`
  padding: 6px 22px;
  background-color: #ffefd5;
  cursor: pointer;
  color: #800000;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Pickled = styled.div`
  padding: 6px 22px;
  background-color: #20b2aa;
  cursor: pointer;
  color: #ffdab9;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Tomatoes = styled.div`
  padding: 6px 22px;
  background-color: #b0e0e6;
  cursor: pointer;
  color: #fff;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Cancel = styled.div`
  padding: 6px 22px;
  background-color: #b0e0e6;
  cursor: pointer;
  color: #fff;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const Cheese = styled.div`
  color: #000;
  background-color: #ffebcd;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;

const CheeseDelete = styled.div`
  color: #000;
  background-color: #ffebcd;
  cursor: pointer;
  padding: 6px 22px;

  @media (max-width: 600px) {
    padding: 2px;
  }

  &:hover {
    opacity: 0.6;
  }
`;
