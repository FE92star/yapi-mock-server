import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(ctx: ExtensionContext) {
  const disposable = commands.registerCommand('extension.helloWorld', () => {
    window.showInformationMessage('Hello World')
  })

  ctx.subscriptions.push(disposable)
}

export function deactivate() {

}
