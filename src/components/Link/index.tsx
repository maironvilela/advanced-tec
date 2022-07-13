import NextLink from 'next/link';
import styles from './link.module.scss';

type LinkProps = {
  description: string;
  isActive?: boolean;
  href: string;
};

export function Link(props: LinkProps) {
  const { description, isActive, href } = props;

  return (
    <li className={isActive ? styles.active : ''}>
      <NextLink href={href}>{description}</NextLink>
    </li>
  );
}
