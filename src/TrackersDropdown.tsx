import { List } from "@raycast/api";
import { Trackers } from "./utils";
import { Tracker } from "./types";

export default function TrackersDropdown({ onTrackerChange }: { onTrackerChange: (newTracker: Tracker) => void }) {
  return (
    <List.Dropdown tooltip="Select Tracker" storeValue={true} onChange={(key) => onTrackerChange(Trackers[key])}>
      <List.Dropdown.Section title="Trackers">
        {Object.entries(Trackers).map(([key, tracker]) => (
          <List.Dropdown.Item key={key} title={tracker.name} value={key} />
        ))}
      </List.Dropdown.Section>
    </List.Dropdown>
  );
}
