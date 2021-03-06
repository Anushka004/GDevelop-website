import styled from 'styled-components';
import { media } from '../lib/media';
import { defaultBoxShadow } from './styles/shadows';

const GameThumbnail = styled.div`
  max-width: 100%;
  height: 30vw;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 6px;
  margin-top: 5px;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 5px;

  ${defaultBoxShadow} ${media.tablet`
    height: 40vh;
  `};
`;

export default GameThumbnail;
