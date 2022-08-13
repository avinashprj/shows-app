import styled, { css } from "styled-components";

export const ShowDetailWrapper = styled.div`
    display: flex;
    max-width: 100vw;
    width: 100vw;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: 0 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0;
        gap: 0;
    }
`;
export const ShowImageWrapper = styled.div`    
    width:50%
    max-width:50%;
    @media (max-width: 768px) {
        width: 100%;
        max-width: 100%;
    }
    display:flex;
    justify-content:center;
`;

export const ShowInfoContainer = styled.div`
    display:flex;
    width:50%
    height:100%;
    max-width:50%;
    @media (max-width: 768px) {
        max-width: 100%;
    }
    flex-direction:column;
    padding: 0 1rem;
`;

export const ImageContainer = styled.div`
    max-width: 20rem;
    max-height: 30rem;
`;

export const TextElement = styled.div`
    ${(props) =>
        props.fw &&
        css`
            font-weight: ${() => props.fw};
        `}
    ${(props) =>
        props.fs &&
        css`
            font-size: ${() => props.fs};
        `}
        ${(props) =>
        props.p &&
        css`
            padding: ${() => props.p};
        `}
        ${(props) =>
        props.display &&
        css`
            display: ${() => props.display};
        `}
        ${(props) =>
        props.gap &&
        css`
            gap: ${() => props.gap};
        `}
`;
