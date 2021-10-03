import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 41px;
        border-radius: ${theme.border.radius};
        background-color: ${theme.colors.white};
        margin-top: 16px;
        padding: 0 40px 0 10px;
        `}
        `
export const TextInputWrapper = styled.View`
    ${({ theme }) => css`
        width: 100%;
        background-color: ${theme.colors.white};
        flex-direction: row;
        align-items: center;
    `}
`

export const Icon = styled.View`
    ${({ theme }) => css`
        display: flex;
        width: 22px;
        color: ${theme.colors.gray};
    `}
`

export const TextInput = styled.TextInput`
    ${({ theme }) => css`
        font-size: 12px;
        font-weight: ${theme.font.regular};
    `}
`