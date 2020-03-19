import styled from 'styled-components';

export const Image = styled.div((props) => {
    const { img } = props;
    return `
    diplay: inline-block;
    background-image: url(${img});
    background-position:center;
    background-size: cover;
    height:3rem;
    width:3rem;
    `;
});
