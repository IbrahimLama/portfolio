import Image from 'next/image';
import Link from 'next/link';
import styles from './content.module.css';
import {
    FaTwitter,
    FaGithub,
    FaMedium,
} from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { HiDownload } from 'react-icons/hi';

export default function Content() {
    return (
        <main className={styles.content}>
            <div className={styles.intro}>
                Lama Ibrahim
                <p>Full Stack Developer.</p>
                <div className={styles.social}>
                    <p className={styles.followMe}>Follow Me</p>
                    <Link href='https://medium.com/@lama.ibrahim96' className={styles.link}>
                        <FaMedium className="social-icon medium" />
                    </Link>
                    <Link href='https://twitter.com/LamaIbr30638170' className={styles.link}>
                        <FaTwitter className="social-icon twitter" />
                    </Link>
                    <Link href='https://github.com/IbrahimLama' className={styles.link}>
                        <FaGithub className="social-icon github" />
                    </Link>
                </div>
                <div>
                    <Link href="mailto:lama.ibrahim96@gmail.com">
                    <button className={[styles.button, styles.primary].join(' ')}>
                        <AiOutlineMail className={styles.btnIcon} height={100} />
                        Email Me
                    </button>
                    </Link>
                    <Link href={'/resume.pdf'} target="_blank" rel="noopener noreferrer">
                        <button className={styles.button}>
                            <HiDownload className={styles.btnIcon} />
                            Resume
                        </button>
                    </Link>
                </div>
            </div>
            <Image
                className={styles.image}
                src={'/pp.jpg'}
                alt='Picture of the author' 
                height={'300'} 
                width={'230'}
            />
        </main>
    )
}