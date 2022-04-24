import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  z-index: ${(props) => props.zIndex};
  position: ${(props) => props.position};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  background-image: ${(props) => props.backgroundImage};
  &:hover {
    cursor: ${(props) => props.cursor};
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  background-image: ${(props) => props.backgroundImage};
  z-index: ${(props) => props.zIndex};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: ${(props) => props.padding};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};  
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  position: ${(props) => props.position};
  &:hover {
    cursor: ${(props) => props.cursor};
  }
`;

const Container = styled.div`
background-image: ${(props) => props.backgroundImage};
  z-index: ${(props) => props.zIndex};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  justify-content: ${(props) => props.justify};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin: ${(props) => props.margin};
  align-items: ${(props) => props.align};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  background-color: ${(props) => props.backgroundColor};
  position: ${(props) => props.position};
  &:hover {
    cursor: ${(props) => props.cursor};
  }
`;

const Text = styled.div`
  z-index: ${(props) => props.zIndex};
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontFamily};
  color: ${(props) => props.color};
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
  text-align: ${(props) => props.textAlign};
  text-decoration: ${(props) => props.textDecoration};
  text-transform: ${(props) => props.textTransform};
  letter-spacing: ${(props) => props.letterSpacing};
  line-height: ${(props) => props.lineHeight};
  margin-top: ${(props) => props.marginTop};
  margin-bottom: ${(props) => props.marginBottom};
  margin-left: ${(props) => props.marginLeft};
  margin-right: ${(props) => props.marginRight};
  margin: ${(props) => props.margin};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  padding-left: ${(props) => props.paddingLeft};
  padding-right: ${(props) => props.paddingRight};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.border};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  position: ${(props) => props.position};
  word-spacing: ${(props) => props.wordSpacing};
  &:hover {
    cursor: ${(props) => props.cursor};
  }
`;

export {Row, Column, Container, Text};