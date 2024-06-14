import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import Button from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface ButtonErrorProps {
  className?: string;
}

const ButtonError = ({ className }: ButtonErrorProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow} className={classNames(null, {}, [className])}>
            {t('Выдать ошибку')}
        </Button>
    );
};

export default ButtonError;
