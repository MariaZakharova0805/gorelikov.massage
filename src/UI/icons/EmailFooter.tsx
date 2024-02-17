import React, { SVGProps } from "react";

export const EmailFooter = (props: SVGProps<SVGSVGElement>) => (
<svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip528_2124">
			<rect id="mail" width="24.000000" height="24.000000" transform="translate(8.000000 8.000000)" fill="white" fillOpacity="0"/>
		</clipPath>
	</defs>
	<rect id="mail" width="24.000000" height="24.000000" transform="translate(8.000000 8.000000)" fill="#FFFFFF" fillOpacity="0"/>
	<g clip-path="url(#clip528_2124)">
		<path id="Vector" d="M28 12C29.0996 12 30 12.8984 30 14L30 26C30 27.1016 29.0996 28 28 28L12 28C10.9004 28 10 27.1016 10 26L10 14C10 12.8984 10.9004 12 12 12L28 12Z" stroke="#1A1917" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round"/>
		<path id="Vector" d="M30 14L20 21L10 14" stroke="#1A1917" strokeOpacity="1.000000" strokeWidth="1.500000" strokeLinejoin="round" strokeLinecap="round"/>
	</g>
	<rect id="Telegram" rx="10.000000" width="39.000000" height="39.000000" transform="translate(0.500000 0.500000)" stroke="#1A1917" strokeOpacity="1.000000" strokeWidth="1.000000"/>
</svg>
);

export default React.memo(EmailFooter);
