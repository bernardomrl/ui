import React from 'react';

import { cn } from '../lib';

interface H1Props extends React.ComponentProps<'h1'> {}
const H1 = React.forwardRef<HTMLHeadingElement, H1Props>(
	({ className, ...props }, ref) => {
		return (
			<h1
				ref={ref}
				className={cn(
					'scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance',
					className
				)}
				{...props}
			/>
		);
	}
);

H1.displayName = 'H1';
export { H1, type H1Props };

interface H2Props extends React.ComponentProps<'h2'> {}
const H2 = React.forwardRef<HTMLHeadingElement, H2Props>(
	({ className, ...props }, ref) => {
		return (
			<h2
				ref={ref}
				className={cn(
					'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
					className
				)}
				{...props}
			/>
		);
	}
);

H2.displayName = 'H2';
export { H2, type H2Props };

interface H3Props extends React.ComponentProps<'h3'> {}
const H3 = React.forwardRef<HTMLHeadingElement, H3Props>(
	({ className, ...props }, ref) => {
		return (
			<h3
				ref={ref}
				className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', className)}
				{...props}
			/>
		);
	}
);

H3.displayName = 'H3';
export { H3, type H3Props };

interface H4Props extends React.ComponentProps<'h4'> {}
const H4 = React.forwardRef<HTMLHeadingElement, H4Props>(
	({ className, ...props }, ref) => {
		return (
			<h4
				ref={ref}
				className={cn('scroll-m-20 text-xl font-semibold tracking-tight', className)}
				{...props}
			/>
		);
	}
);

H4.displayName = 'H4';
export { H4, type H4Props };

interface PProps extends React.ComponentProps<'p'> {}
const P = React.forwardRef<HTMLParagraphElement, PProps>(
	({ className, ...props }, ref) => {
		return (
			<p
				ref={ref}
				className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
				{...props}
			/>
		);
	}
);

P.displayName = 'P';
export { P, type PProps };

interface BlockquoteProps extends React.ComponentProps<'blockquote'> {}
const Blockquote = React.forwardRef<HTMLQuoteElement, BlockquoteProps>(
	({ className, ...props }, ref) => {
		return (
			<blockquote
				ref={ref}
				className={cn('mt-6 border-l-2 pl-6 italic', className)}
				{...props}
			/>
		);
	}
);

Blockquote.displayName = 'Blockquote';
export { Blockquote, type BlockquoteProps };

interface ListProps extends React.ComponentProps<'ul'> {}
const List = React.forwardRef<HTMLUListElement, ListProps>(
	({ className, ...props }, ref) => {
		return (
			<ul
				ref={ref}
				className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
				{...props}
			/>
		);
	}
);

List.displayName = 'List';
export { List, type ListProps };

interface CodeProps extends React.ComponentProps<'code'> {}
const Code = React.forwardRef<HTMLElement, CodeProps>(({ className, ...props }, ref) => {
	return (
		<code
			ref={ref}
			className={cn(
				'bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
				className
			)}
			{...props}
		/>
	);
});

Code.displayName = 'Code';
export { Code, type CodeProps };
