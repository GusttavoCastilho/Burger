import styled, { css } from 'styled-components/native'
import { CategoryCardProps } from '.'

type ActiveProps = Pick<CategoryCardProps, 'isActive'>

export const Wrapper = styled.TouchableOpacity<ActiveProps>`
    ${({ theme, isActive }) => css`
        width: 95px;
        height: 176px;
        border-radius: 20px;
        background-color: ${theme.colors.white};
        margin-top: 24px;
        align-items: center;
        justify-content: space-between;
        padding: 19px 0 13px 0;

        ${isActive && `
            background-color: ${theme.colors.red};
        `}
    `}
`

export const ImageWrapper = styled.View<ActiveProps>`
    ${({ isActive, theme }) => css`

        ${isActive && `
            width: 50px;
            height: 50px;
            background-color: ${theme.colors.white};
            border-radius: 10px;
        `} 
    `}
`

export const Image = styled.Image``

export const Title = styled.Text<ActiveProps>`
    ${({ theme, isActive }) => css`
        font-size: 16px;
        font-weight: ${theme.font.medium};
        color: ${theme.colors.black};

        ${isActive && `
            color: ${theme.colors.white};
        `}
    `}
    
`

export const Button = styled.TouchableOpacity<ActiveProps>`
    ${({ theme, isActive }) => css`
        width: 26px;
        height: 26px;
        border-radius: 20px;
        background-color: ${theme.colors.black};
        align-items: center;
        justify-content: center;

        ${isActive && `
            background-color: ${theme.colors.white};
        `}
    `}
`