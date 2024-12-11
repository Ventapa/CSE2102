import ScoreController from '../controllers/ScoreController'; 

beforeAll(() => {
  global.alert = jest.fn();
});

// Reset the score and count after each test to avoid state leaking between tests
beforeEach(() => {
  // Reset the state to initial values (0 for both score and count)
  ScoreController.score = 0;
  ScoreController.count = 0;
});

afterEach(() => {
  jest.clearAllMocks(); 
});

test('ScoreController initializes with score 0 and count 0', () => {
  const state = ScoreController.getScore();
  expect(state.score).toBe(0);
  expect(state.count).toBe(0);
});

test('incrementScore increases score and count by 1', () => {
  ScoreController.incrementScore();
  
  const state = ScoreController.getScore();
  expect(state.score).toBe(1);
  expect(state.count).toBe(1);
  
  // Check if alert was called with the correct message
  expect(global.alert).toHaveBeenCalledWith("You are correct!");
});

test('dontIncrementScore increases count by 1 but does not change score', () => {
  ScoreController.dontIncrementScore();
  
  const state = ScoreController.getScore();
  expect(state.score).toBe(0);  // Score should remain the same
  expect(state.count).toBe(1);  // Count should be incremented
  
  // Check if alert was called with the correct message
  expect(global.alert).toHaveBeenCalledWith("Sorry - not correct");
});

test('getScore returns the current score and count', () => {
  ScoreController.incrementScore();
  ScoreController.incrementScore();
  
  const state = ScoreController.getScore();
  expect(state.score).toBe(2); // Score should be 2 after two increments
  expect(state.count).toBe(2); // Count should also be 2
});
