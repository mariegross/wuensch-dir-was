import styled from 'styled-components';
import AddButton from './AddButton';

const DangerButton = styled(AddButton)`
  background-color: #990000;
  border: 4px solid #990000;
  color: white;
  line-height: 0.7;
  position: absolute;
  bottom: 10px;
`;
export default DangerButton;
