import LoginSaga from './components/Login/sagas.js';

export default function* IndexSaga(){
    yield [
        LoginSaga()
    ];
}