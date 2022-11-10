import * as vscode from 'vscode';
 
export class HelloTaskTerminal implements vscode.Pseudoterminal {
    private writeEmitter = new vscode.EventEmitter<string>();
    public onDidWrite: vscode.Event<string> = this.writeEmitter.event;
    private closeEmitter = new vscode.EventEmitter<number>();
    public onDidClose?: vscode.Event<number> = this.closeEmitter.event;
 
    public constructor(protected definition: vscode.TaskDefinition) {
    }
 
    public async open(_initialDimensions: vscode.TerminalDimensions | undefined): Promise<void> {
        let success = false;
        this.writeEmitter.fire('Hello from Task terminal!');
        this.closeEmitter.fire(0);
    }
 
    public close(): void {
        // Close terminal
    }
}
