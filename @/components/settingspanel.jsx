
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function SettingsPanel() {
  return (
    (<div className="grid gap-6">
      <div>
        <h2 className="text-lg font-medium">UI Settings</h2>
      </div>
      <div>
        <h2 className="text-lg font-medium">Functional</h2>
        <p className="text-sm leading-none text-gray-500">Enhance your workflow with these features.</p>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="switch1" />
          <Label htmlFor="switch1">Switch 1</Label>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="switch2" />
          <Label htmlFor="switch2">Switch 2</Label>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium">Visual</h2>
        <p className="text-sm leading-none text-gray-500">Customize the look and feel of your environment.</p>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch defaultChecked id="switch3" />
          <Label htmlFor="switch3">Switch 3</Label>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="switch4" />
          <Label htmlFor="switch4">Switch 4</Label>
        </div>
      </div>
    </div>)
  );
}
