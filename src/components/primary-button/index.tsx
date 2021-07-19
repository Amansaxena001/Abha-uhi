import React from 'react'
import { Button } from 'antd'

interface IProps {
  children: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  type?: any;
  onClickHandler: () => any
  target?: string;
  loading?: boolean;
  href?: string;
  block?: boolean;
  style?: object
  className?: string

}

const PrimaryButton: React.FC<IProps> = ({ children, disabled, icon, type, onClickHandler, target, loading, href, block, style, className }) => (
  <Button disabled={disabled} block={block} onClick={onClickHandler} icon={icon} type={type} target={target} loading={loading} href={href} style={style} className={className}>{children}</Button>
);


export default PrimaryButton