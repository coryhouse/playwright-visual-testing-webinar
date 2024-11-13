
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function SettingsPanel() {
  return (
    (
    <div className="container mx-auto max-w-3xl">
      <div className="grid gap-6">
      <div>
        <h2 className="text-2xl font-medium">UI Settings</h2>
      </div>
      <div>
        <h2 className="text-lg font-medium">Functional Bugs and Changes
</h2>
        <p className="text-sm leading-none text-gray-500">Show how Visual AI can find functional bugs.

</p>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="switch1" />
          <Label htmlFor="switch1">Replace "Add to cart" text with "Buy now"</Label>
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="switch2" />
          <Label htmlFor="switch2">Switch 2</Label>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-medium">Visual Bugs and Changes
</h2>
        <p className="text-sm leading-none text-gray-500">Show how Visual AI can find visual changes.</p>
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
    </div>
    </div>
    
    
      )
  );
}
