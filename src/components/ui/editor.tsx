'use client'


import { cn } from '@/lib/utils';

interface EditorProps extends React.HTMLAttributes<HTMLDivElement>{
}

export const Editor = ({className, children, ...props }: EditorProps) => {
    return(
        <div className={cn('',className)} {...props}>
            {children}
        </div>
    )
};