import React, { useState, useEffect } from "react";
import { Button } from "../../components/button";
import { Flex } from "../../components/flex";
import { Color } from "../../components/color";
import styled from "styled-components";
import Image from "next/image";

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content {
    margin-top: 50px;
    width: 1024px;
    height: 800px;
  }
`;

export default function Home() {
  const [side, setSide] = useState("front");
  const [currentColor, setCurrentColor] = useState("red");

  const [colors, setColors] = useState([
    {
      id: 1,
      color: "blue",
    },
    {
      id: 2,
      color: "pink",
    },
    {
      id: 3,
      color: "red",
    },
    {
      id: 4,
      color: "yellow",
    },
  ]);

  useEffect(() => {    
  alert('Acessando...')
  }, []);

  return (
    <>
      <Center>
        <div className="content">
          <Flex justify="space-around" mt="120px">
            <Flex direction="column">
              <Button
                onClick={() => setSide("front")}
              >
                Front
              </Button>
              <Button
                onClick={() => setSide("back")}
              >
                Back
              </Button>
            </Flex>

            <Image
              src={`/images/${side}-${currentColor}.jpg`}
              alt="Picture of the author"
              width={500}
              height={500}
            />

            <Flex direction="column">
              {colors.map((item, index) => (
                <Color
                  key={index}
                  onClick={() => setCurrentColor(`${item.color}`)}
                  bgColor={item.color}
                />
              ))}
            </Flex>
          </Flex>
        </div>
      </Center>
    </>
  );
}
