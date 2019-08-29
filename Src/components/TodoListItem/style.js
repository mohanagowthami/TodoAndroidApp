import styled from "styled-components";

export const TodoListItemView = styled.View`
  flex: 1;
  max-height: 60px;
  margin-top: 10px;

  flex-direction: row;
  border-bottom-color: gray;
  border-bottom-width: 1px;
`;
export const CheckBoxView = styled.View`
  width: 10%;
`;
export const InputBoxView = styled.View`
  flex: 1;
`;
export const BinView = styled.View`
  width: 50px;
`;
export const FooterImage = styled.Image`
  width: 30px;
  height: 30px;
`;
export const Input = styled.TextInput`
  padding: 5px;
  font-size: 20px;
  width: 200px;
`;
export const NormalText = styled.Text`
  font-size: 20px;
`;
export const StrikeText = styled.Text`
  font-size: 20px;
  text-decoration-line: line-through;
`;
