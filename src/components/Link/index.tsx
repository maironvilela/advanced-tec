import NextLink from 'next/link';
import styles from './link.module.scss';

type LinkProps = {
  description: string;
  isActive?: boolean;
};

export function Link(props: LinkProps) {
  const { description, isActive } = props;

  return (
    <li className={isActive ? styles.active : ''}>
      <NextLink href="#">{description}</NextLink>
    </li>
  );
}
