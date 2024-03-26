import React, { useState } from 'react';
import { CollapseContainer, CollapseContent, CollapseHeader, ItemIconContainer, ParagraphContainer } from './style';
import { Paragraph } from '@/components/atoms/Text';
import { colors } from '@/utils/colors';
import { fontSizes, fontWeight } from '@/utils/fonts';

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <CollapseContainer>
            <CollapseHeader onClick={toggleCollapse}>
                <ParagraphContainer>
                    <Paragraph
                        fontColor={colors.cinza800}
                        fontWeight={fontWeight.semibold}
                        fontSize={fontSizes.medium16}
                        lineHeight="22px"
                    >
                        {title}
                    </Paragraph>
                </ParagraphContainer>
                <ItemIconContainer>
                    <span>{isOpen ? '-' : '+'}</span>
                </ItemIconContainer>
            </CollapseHeader>
            <CollapseContent isOpen={isOpen}>{children}</CollapseContent>
        </CollapseContainer>
    );
};