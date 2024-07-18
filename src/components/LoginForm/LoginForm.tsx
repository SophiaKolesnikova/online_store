import React, { useEffect, useState } from 'react';
import Title from '../Atoms/Title/Title.tsx';
import FormGroup from '../Molecules/FormGroup/FormGroup.tsx';
import TextField from '../Atoms/TextField/TextField.tsx';
import Button from '../Atoms/Button/Button.tsx';
import { useAddAuthUserMutation } from '../../store/api/auth.api.ts';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

interface FormErrors {
    username?: string;
    password?: string;
}

const LoginForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [addUser, { data, isError: authError, isLoading: authLoading }] =
        useAddAuthUserMutation();

    const navigate = useNavigate();
    const authToken = localStorage.getItem('authToken');

    const [errors, setErrors] = useState<FormErrors>({});

    const validate = (): boolean => {
        let isValid = true;
        const errors: FormErrors = {};

        if (password.length < 6) {
            errors.password = 'Пароль должен содержать минимум 6 символов';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            addUser({ username, password, expiresInMins: 10 });
        }
        if (data?.token) {
            localStorage.setItem('authToken', data.token);
        }
        if (data?.id) {
            localStorage.setItem('userId', data.id.toString());
        }
    };

    useEffect(() => {
        if (authToken) {
            return navigate('/');
        }
    }, [authToken, navigate]);

    return (
        <div className={styles.container}>
            <Title size={'large'} variant={'secondary'}>
                Login
            </Title>
            {authLoading && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '18px',
                    }}
                >
                    Loading...
                </p>
            )}
            {authError && (
                <p
                    style={{
                        textAlign: 'center',
                        color: 'red',
                        fontSize: '18px',
                    }}
                >
                    Something wrong...
                </p>
            )}
            <div className={styles.content}>
                <FormGroup
                    onSubmit={onSubmit}
                    gap={'large'}
                    direction={'column'}
                    padding={'none'}
                >
                    <TextField
                        type={'text'}
                        variant={'primary'}
                        height={'large'}
                        value={username}
                        onChange={handleUsernameChange}
                        placeholder={'Login'}
                        required
                    />
                    <TextField
                        type={'text'}
                        variant={'primary'}
                        height={'large'}
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder={'Password'}
                        required
                    />
                    {errors.password && (
                        <span
                            style={{
                                textAlign: 'center',
                                color: 'red',
                                fontSize: '18px',
                            }}
                        >
                            {errors.password}
                        </span>
                    )}
                    <Button
                        size={'large'}
                        variant={'primary'}
                        type={'submit'}
                        disabled={authLoading === true}
                    >
                        Login
                    </Button>
                </FormGroup>
            </div>
        </div>
    );
};

export default LoginForm;
