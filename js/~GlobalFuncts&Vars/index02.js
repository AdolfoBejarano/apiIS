function RectangleArea (nLength, nWidth)
{
    return (nLength * nWidth);
}

nArea = RectangleArea (nLong, nWide);

if (RectangleArea(nLong, nWide) > nMaxArea) then
MessageBox("Area exceeds maximum allowed.", INFORMATION);
endif;