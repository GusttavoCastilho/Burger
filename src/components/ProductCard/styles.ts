import styled, { css } from 'styled-components/native'

export const Wrapper = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 260px;
        background-color: ${theme.colors.white};
        border-radius: 15px;
        margin-top: 40px;
        padding: 12px 10px 18px 10px;
        position: relative;
    `}
`

export const ImageWrapper = styled.View`
    ${({ theme }) => css`
        width: 100%;
        height: 160px;
        background-color: ${theme.colors.red};
        border-radius: 15px;
        align-items: center;
        justify-content: center;
    `}
`

export const Image = styled.Image`
    position: absolute;
    bottom: 20px;
`

export const Info = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-top: 18px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: ${theme.font.medium};
        color: ${theme.colors.black};
    `}
`

export const Price = styled.Text`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: ${theme.font.bold};
        color: ${theme.colors.black};
    `}
`

export const Category = styled.Text`
    ${({ theme }) => css`
        font-size: 14px;
        font-weight: ${theme.font.medium};
        color: ${theme.colors.gray};
        padding-top: 4px;
    `}
`