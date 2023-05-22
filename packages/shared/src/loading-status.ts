export enum LoadingStatus {
    Init = "Initializing WebContainer...",
    Install = "Installing dependencies...",
    Eval = "Initializing Console...",
    CompileError = "Compilation Error",
    TestFailure = "Tests Failed",
    Completed = "Ready"
}