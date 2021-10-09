import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
    ${({ theme }) => css`
        padding: 15px;
        background-color: ${theme.colors.white};
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 30px;
        font-weight: ${theme.font.semiBold};
        color: ${theme.colors.black};
    `}
`

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: 16px;
        font-weight: ${theme.font.medium};
        color: ${theme.colors.gray};
    `}
`

export const Section = styled.View`
    ${({ theme }) => css`
        width: 100%;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
        margin-top: 28px;
    `}
`

export const TextSection = styled.Text`
    ${({ theme }) => css`
        font-size: 18px;
        font-weight: ${theme.font.semiBold};
        color: ${theme.colors.black};
    `}
`

export const ButtonSection = styled.Text`
    ${({ theme }) => css`
        font-size: 16px;
        font-weight: ${theme.font.medium};
        color: ${theme.colors.red};
    `}
`