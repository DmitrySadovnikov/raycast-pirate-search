import { ActionPanel, List, Action } from "@raycast/api";
import { useState } from "react";
import { Trackers } from "./utils";
import TrackersDropdown from "./TrackersDropdown";

export default function Command() {
  const [query, setQuery] = useState<string>(null);

  const [tracker, setTracker] = useState(Trackers.rutracker);

  return (
    <List
      filtering={false}
      throttle={true}
      onSearchTextChange={setQuery}
      searchBarAccessory={<TrackersDropdown onTrackerChange={setTracker} />}
    >
      {query && (
        <List.Item
          key={query}
          id={query}
          title={query}
          actions={
            <ActionPanel>
              <Action.OpenInBrowser title={`Open in ${tracker.name}`} url={`${tracker.url}${query}`} />
            </ActionPanel>
          }
        />
      )}
    </List>
  );
}
