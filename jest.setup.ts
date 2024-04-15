import 'whatwg-fetch';
import '@testing-library/jest-dom';
import { server } from './src/test/mocks/server';



beforeAll(() => server.listen({onUnhandledRequest: 'error'}))
afterAll(() => server.close())
afterEach(() => server.resetHandlers())

