import { useRouter } from 'next/router';
import { HTMLAttributes, MouseEvent } from 'react';
import styled from 'styled-components';

type FloatingUploadButtonProps = {} & HTMLAttributes<HTMLButtonElement>;

const FloatingUploadButton = ({ ...rest }: FloatingUploadButtonProps) => {
  const router = useRouter();

  const onClickUploadButton = (event: MouseEvent<HTMLButtonElement>) => {
    router.push('upload');
  };

  return (
    <StyledFloatingButton onClick={onClickUploadButton}>
      ➕
    </StyledFloatingButton>
  );
};

export default FloatingUploadButton;

const StyledFloatingButton = styled.button`
  position: absolute;
  right: 30px;
  bottom: 30px;
`;
