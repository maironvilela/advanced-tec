import styles from './about.module.scss';


type AboutProps={
  title: string,
  content: string
}

export function About({title, content}:AboutProps) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>

    </div>
  );
}
