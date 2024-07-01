import React from 'react'
import styled from 'styled-components'
import { skills } from '../../data/skills.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
   padding: 60px 20px;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 18px;
  padding:0;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(145deg, #854CE6, #178582);
  border: none;
  box-shadow: rgba(23, 92, 230, 0.25) 0px 8px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-10px);
  }
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;


const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: transform 0.2s, background-color 0.2s;
  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.text_primary + 20};
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;


const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`

const Skills = () => {
  return (
    <Container id="skills" className='bg-[#0A1828]'>
      <Wrapper>
        <Title className='text-[#BD8B28]'>Skills</Title>
        <div className="w-1/2 h-1 bg-[#BD8B28] mx-auto mb-8"></div>
        <Desc className='text-[#BD8B28]'>Here are some of my skills which I have acquired over a course of time.</Desc>
        <SkillsContainer>
          {skills.map((skill, skillIndex) => (
            <Skill key={skillIndex} className='bg-[#178582] border-2 border-[#BD8B28]'>
              <SkillTitle className='text-[#BD8B28]'>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={itemIndex} className="text-[#0A1828]">
                    <SkillImage src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills
